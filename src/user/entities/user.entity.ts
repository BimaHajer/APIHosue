import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("User")
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("text",{name:"firstname",nullable:true})
    firstName: string;
    @Column("text",{name:"lastName",nullable:true})
    lastName: string;
    @Column("text",{name:"email",nullable:true})
    email: string;
    @Column("text",{name:"password",nullable:true})
    password: string;
    @Column("text",{name:"role",nullable:true})
    role: string;
    @Column("date",{name:"createAt",nullable:true})
    created_at: Date;
    @Column("date",{name:"updateAt",nullable:true})
    updated_at: Date;
    @Column("date",{name:"deleteAt",nullable:true})
    deleted_at: Date;
}
