import { BeforeInsert, BeforeRemove, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("equipement")

export class Equipement {
     @PrimaryGeneratedColumn()
        id: number;
        @Column("text",{name:"title",nullable:true})
        title: string;
        @Column("text",{name:"description",nullable:true})
        description: string;
        @Column("text",{name:"condition",nullable:true})
        condition: string;
        @Column("text",{name:"quantity",nullable:true})
        quantity: number;
        @Column("date",{name:"createdAt",nullable:true})
        created_at: Date;
        @Column("date",{name:"createdBy",nullable:true})
        created_by: number;
        @Column("date",{name:"updateAt",nullable:true})
        updated_at: Date;
        @Column("date",{name:"updateBy",nullable:true})
        updated_by: number; 
        @Column("date",{name:"deleted_at",nullable:true})       
        deleted_at: Date;
        @Column("date",{name:"deleted_by",nullable:true})       
        deleted_by: number;
        @Column("date",{name:"isavaible",nullable:true})
        isavaible: boolean;
        @Column("date",{name:"active",nullable:true})
        active: boolean;
        
    
    
    
    }
    

