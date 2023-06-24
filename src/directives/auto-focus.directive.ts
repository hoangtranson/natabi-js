import { Directive, directive } from "lit/directive.js";

class AutoFocusDirective extends Directive {
  render(...props: unknown[]): unknown {
    console.log("AutoFocusDirective.render", props);
    return {
      ...props,
      onMount: (host: HTMLElement) => {
        host.focus();
      },
    };
  }
}

export const autoFocus = directive(AutoFocusDirective);
