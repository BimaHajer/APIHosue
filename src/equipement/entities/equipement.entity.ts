import { BeforeInsert, BeforeRemove, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("equipement")

export class Equipement {
     @PrimaryGeneratedColumn()
        id: number;
        @Column("text",{name:"name",nullable:true})
        name: string;
        @Column("text",{name:"condition",nullable:true})
        condition: string;
        @Column("text",{name:"quantity",nullable:true})
        quantity: number;
        @Column("date",{name:"createdAt",nullable:true})
        created_at: Date;
        @Column("date",{name:"createdBy",nullable:true})
        created_by: Date;
        @Column("date",{name:"updateAt",nullable:true})
        updated_at: Date;
        @Column("date",{name:"updateBy",nullable:true})
        updated_by: Date;        
        deleted_at: Date;
    
    
    
    }
    

