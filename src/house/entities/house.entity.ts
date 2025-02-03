import { BeforeInsert, BeforeRemove, BeforeUpdate, Column, Decimal128, Entity, PrimaryGeneratedColumn } from "typeorm";
    
@Entity("house")
    
    export class House {
        @PrimaryGeneratedColumn()
            id: number;
            @Column("text",{name:"title",nullable:true})
            title: string;
            @Column("text",{name:"description",nullable:true})
            description: string;
            @Column("text",{name:"location",nullable:true})
            location: string;
            @Column("text",{name:"city",nullable:true})
            city: string;
            @Column("text",{name:"poste_code",nullable:true})
            poste_code: number;
            @Column("text",{name:"price",nullable:true})
            price: Decimal128;
            @Column("text",{name:"availability",nullable:true})
            availability: Date;
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
        
        
        
        }
        
