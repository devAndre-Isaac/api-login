import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity("academic")
  export class Academic {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column()
    name_institution: string;
  
    @Column()
    cnpj: string;
  
    @Column()
    course: string;
  
    @Column()
    use_for: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    update_at: Date;
}
