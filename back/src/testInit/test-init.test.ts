import { trueData } from './data-test';

describe('Testing test init', () => {
    test('Happy path', () => {
        expect(trueData).toBeTruthy();
    });
});
