import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {} from 'class-validator';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;
  @Column()
  readonly email: string;
  @Column()
  readonly password: string;
  // @AfterInsert()
  // logInsert() {
  //   console.log('Inserted User with id ', this.id);
  // }
  // @AfterUpdate()
  // logUpdate() {
  //   console.log('Update User with id ', this.id);
  // }
  // @AfterRemove()
  // logRemove() {
  //   console.log('Remove User with id ', this.id);
  // }
}