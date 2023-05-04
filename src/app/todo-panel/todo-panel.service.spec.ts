import { TestBed } from '@angular/core/testing';

import { TodoPanelService } from './todo-panel.service';

describe('TodoPanelService', () => {
  let service: TodoPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
