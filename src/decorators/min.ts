export function min() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const dv = descriptor.value;
    
        descriptor.value = function (...args: any[]) {
            if (this.grade < 0) {
                return 0; 
            }
    
            return dv.apply(this, args);
        };
    
        return descriptor;
    };
}