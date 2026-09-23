import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const app = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8');
const list = await readFile(new URL('../src/components/EmployeeList.tsx', import.meta.url), 'utf8');
const grid = await readFile(new URL('../src/components/employees/EmployeeGrid.tsx', import.meta.url), 'utf8');
const form = await readFile(new URL('../src/components/forms/AddEmployeeForm.tsx', import.meta.url), 'utf8');

test('employee creation is wired through dashboard-owned state', () => {
  assert.match(app, /useState<Employee\[]>\(seedEmployees\)/);
  assert.match(app, /employees=\{employees\}/);
  assert.match(app, /onAdd=\{\(employee\) => setEmployees/);
  assert.match(list, /interface EmployeeListProps/);
  assert.match(list, /onClick=\{onAddEmployee\}/);
  assert.match(grid, /employees: Employee\[]/);
});

test('demo employee form does not send PII to Supabase or another remote backend', () => {
  assert.doesNotMatch(form, /@supabase\/supabase-js/);
  assert.doesNotMatch(form, /createClient/);
  assert.doesNotMatch(form, /\.from\(['"]employees['"]\)/);
  assert.match(form, /stays in this browser session/);
});

test('employee input is bounded before insertion into local state', () => {
  assert.match(form, /name\.length > 120/);
  assert.match(form, /email\.length > 254/);
  assert.match(form, /position\.length > 120/);
  assert.match(form, /crypto\.randomUUID\(\)/);
  assert.match(form, /maxLength=\{120\}/);
  assert.match(form, /maxLength=\{254\}/);
});

test('employee view controls expose accessible state', () => {
  assert.match(list, /aria-label="Grid view"/);
  assert.match(list, /aria-label="Table view"/);
  assert.match(list, /aria-pressed=\{viewMode === 'grid'\}/);
  assert.match(list, /aria-pressed=\{viewMode === 'table'\}/);
});
