interface IVAutofocus {
    mounted: (el: HTMLElement) => void;
  }
  
const vAutofocus: IVAutofocus = {
    mounted: (el) => {
        el.focus();
    }
}