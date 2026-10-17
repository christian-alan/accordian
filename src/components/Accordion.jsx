import { useId, useRef, useState } from 'react';
import { ChevronIcon } from './icons';

/**
 * One card at rest. Opening item k splits it into three cards:
 * [items above] [item k] [items below]. Each item knows whether it is the
 * top or bottom edge of its card, and whether a gap opens above it.
 */
function edges(k, open, n) {
  const has = open >= 0;
  return {
    top: k === 0 || (has && (k === open || k === open + 1)),
    bottom: k === n - 1 || (has && (k === open || k === open - 1)),
    gap: has && k > 0 && (k === open || k === open + 1),
  };
}

export default function Accordion({ items, label }) {
  const [open, setOpen] = useState(-1);
  const buttons = useRef([]);
  const uid = useId();
  const n = items.length;

  const onKeyDown = (e, i) => {
    const keys = { ArrowDown: (i + 1) % n, ArrowUp: (i - 1 + n) % n, Home: 0, End: n - 1 };
    if (e.key in keys) {
      e.preventDefault();
      buttons.current[keys[e.key]]?.focus();
    } else if (e.key === 'Escape') {
      setOpen(-1);
    }
  };

  return (
    <div aria-label={label} className="flex w-[min(380px,100%)] flex-col">
      {items.map(({ Icon, title, body }, k) => {
        const { top, bottom, gap } = edges(k, open, n);
        const isOpen = k === open;
        const btnId = `${uid}-btn-${k}`;
        const panelId = `${uid}-panel-${k}`;

        return (
          <div
            key={title}
            className="acc-item"
            data-top={top || undefined}
            data-bottom={bottom || undefined}
            data-gap={gap || undefined}
            data-open={isOpen || undefined}
          >
            <span className="acc-glass" aria-hidden="true" />

            <h3 className="relative z-1 m-0">
              <button
                ref={(el) => (buttons.current[k] = el)}
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : k)}
                onKeyDown={(e) => onKeyDown(e, k)}
                className="acc-row flex min-h-12 w-full cursor-pointer items-center gap-3 pr-4 pl-[18px] text-left text-[14.5px] font-medium tracking-[-0.005em] text-(--fg) outline-none"
              >
                <Icon className="relative z-1 size-[19px] shrink-0 text-(--icon)" />
                <span className="relative z-1 min-w-0 flex-1">{title}</span>
                <ChevronIcon className="acc-chevron relative z-1 size-4 shrink-0" />
              </button>
            </h3>

            <div id={panelId} role="region" aria-labelledby={btnId} className="acc-panel relative z-1">
              <div className="min-h-0 overflow-hidden">
                <p className="acc-body m-0 pr-5 pb-4 pl-[49px] text-[13.5px] leading-normal text-(--muted)">
                  {body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
