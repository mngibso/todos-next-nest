import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';
import { ToDo } from './todo.db';
import { getModelToken } from '@nestjs/mongoose';

const toDoModel = jest.fn();
describe('TodoDao', () => {
  let service: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken(ToDo.name, 'local'),
          useValue: toDoModel,
        },
        TodoService,
      ],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
