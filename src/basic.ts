import { pass } from './decorators/pass.js';
import { min } from './decorators/min.js';
import { max } from './decorators/max.js';

export class Student {
  firstName: string;
  lastName: string;
  
  grade: number;
  group: string;

  constructor(firstName: string, lastName: string, grade: number, group: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.group = group;
  }

  @pass()
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @min()
  @max()
  getGrade(): number {
    return this.grade;
  }
}
