import { assert, expect, test } from 'vitest'
import { Student } from '../src/basic.js'

// Edit an assertion and save to see HMR in action

test('Student fullname', () => {
  const student = new Student('Don', 'Juan', 10, 'A')
  expect(student.getFullName()).toBe('Don Juan')
  const student2 = new Student('Don', '', 10, 'A')
  // expect(student2.getFullName()).toBe('Don ')
})

test('Student grade', () => {
  const student = new Student('Don', 'Juan', 14, 'A')
  expect(student.getGrade()).toBe(12)
  const student2 = new Student('Don', 'Juan', -1, 'A')
  // expect(student2.getGrade()).toBe(-1)
})