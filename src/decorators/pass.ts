export function pass() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const dv = descriptor.value;
  
      descriptor.value = function (...args: any[]) {
        if (this.firstName === '' || this.lastName === '') {
          return 'Pass'; 
        }
  
        return dv.apply(this, args);
      };
  
      return descriptor;
    };
  }
  