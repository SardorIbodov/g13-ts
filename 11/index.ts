namespace Utils {
  export const PI = 3.1415;
  export function log(text: string, color: string, fontSize: number): void {
    console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}px`);
  }
}

Utils.log("Hello", "yellow", 40);
