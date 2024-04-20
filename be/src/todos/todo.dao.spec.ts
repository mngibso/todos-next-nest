import { Test, TestingModule } from '@nestjs/testing';
import { TodoDao } from './todo.dao';
import { ToDo } from './todo.db';
import { getModelToken } from '@nestjs/mongoose';

const toDoModel = jest.fn();
describe('TodoDao', () => {
  let service: TodoDao;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken(ToDo.name, 'local'),
          useValue: toDoModel,
        },
        TodoDao,
      ],
    }).compile();

    service = module.get<TodoDao>(TodoDao);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
