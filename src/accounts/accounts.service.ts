/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Account } from './accounts.model';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private userAccount: Repository<Account>,
  ) {}
  create(createAccountDto: CreateAccountDto) {
    const { Title, Description } = createAccountDto;
    const account = {
      Title,
      Description,
    };
    this.userAccount.save(account);
    return account;
  }

  findAll(): Promise<Account[]> {
    return this.userAccount.find();
  }

  findOne(id: string): Promise<Account> {
    return this.userAccount.findOne(id);
  }

  async update(
    id: string,
    updateAccountDto: UpdateAccountDto,
  ): Promise<Account> {
    const findAccount = await this.userAccount.findOne(id);
    findAccount.Title = updateAccountDto.Title;
    findAccount.Description = updateAccountDto.Description;
    this.userAccount.save(findAccount);
    return findAccount;
  }

  async remove(id: string): Promise<void> {
    await this.userAccount.delete(id);
  }
}
