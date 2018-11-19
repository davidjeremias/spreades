import { InputGroupModule } from './input-group.module';

describe('InputGroupModule', () => {
  let inputGroupModule: InputGroupModule;

  beforeEach(() => {
    inputGroupModule = new InputGroupModule();
  });

  it('should create an instance', () => {
    expect(inputGroupModule).toBeTruthy();
  });
});
