export function max() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const dv = descriptor.value;
    
        descriptor.value = function (...args: any[]) {
            if (this.grade > 12) {
                return 12; 
            }
    
            return dv.apply(this, args);
        };
    
        return descriptor;
    };
}