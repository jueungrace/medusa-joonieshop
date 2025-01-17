import { FindManyOptions, FindOneOptions, FindOperator, FindOptionsSelect, FindOptionsWhere, OrderByCondition } from "typeorm";
import { FindOptionsOrder } from "typeorm/find-options/FindOptionsOrder";
import { FindOptionsRelations } from "typeorm/find-options/FindOptionsRelations";
/**
 * Utility type used to remove some optional attributes (coming from K) from a type T
 */
export declare type WithRequiredProperty<T, K extends keyof T> = T & {
    [Property in K]-?: T[Property];
};
export declare type PartialPick<T, K extends keyof T> = {
    [P in K]?: T[P];
};
export interface BaseEntity {
    id: string;
    created_at: Date;
    updated_at: Date;
}
export interface SoftDeletableEntity extends BaseEntity {
    deleted_at: Date | null;
}
export declare type Writable<T> = {
    -readonly [key in keyof T]: T[key] | FindOperator<T[key]> | FindOperator<T[key][]> | FindOperator<string[]>;
};
export interface FindConfig<Entity> {
    select?: (keyof Entity)[];
    skip?: number;
    take?: number;
    relations?: string[];
    order?: {
        [K: string]: "ASC" | "DESC";
    };
}
export declare type ExtendedFindConfig<TEntity> = (Omit<FindOneOptions<TEntity>, "where" | "relations" | "select"> | Omit<FindManyOptions<TEntity>, "where" | "relations" | "select">) & {
    select?: FindOptionsSelect<TEntity>;
    relations?: FindOptionsRelations<TEntity>;
    where: FindOptionsWhere<TEntity> | FindOptionsWhere<TEntity>[];
    order?: FindOptionsOrder<TEntity>;
    skip?: number;
    take?: number;
};
export declare type QuerySelector<TEntity> = Selector<TEntity> & {
    q?: string;
};
export declare type TreeQuerySelector<TEntity> = QuerySelector<TEntity> & {
    include_descendants_tree?: boolean;
};
export declare type Selector<TEntity> = {
    [key in keyof TEntity]?: TEntity[key] | TEntity[key][] | DateComparisonOperator | StringComparisonOperator | NumericalComparisonOperator | FindOperator<TEntity[key][] | string | string[]>;
};
export declare type TotalField = "shipping_total" | "discount_total" | "tax_total" | "refunded_total" | "total" | "subtotal" | "refundable_amount" | "gift_card_total" | "gift_card_tax_total";
export interface CustomFindOptions<TModel, InKeys extends keyof TModel> {
    select?: FindManyOptions<TModel>["select"];
    where?: FindManyOptions<TModel>["where"] & {
        [P in InKeys]?: TModel[P][];
    };
    order?: OrderByCondition;
    skip?: number;
    take?: number;
}
export declare type QueryConfig<TEntity extends BaseEntity> = {
    defaultFields?: (keyof TEntity | string)[];
    defaultRelations?: string[];
    allowedFields?: string[];
    allowedRelations?: string[];
    defaultLimit?: number;
    isList?: boolean;
};
export declare type RequestQueryFields = {
    expand?: string;
    fields?: string;
    offset?: number;
    limit?: number;
    order?: string;
};
export declare type PaginatedResponse = {
    limit: number;
    offset: number;
    count: number;
};
export declare type DeleteResponse = {
    id: string;
    object: string;
    deleted: boolean;
};
export interface EmptyQueryParams {
}
export interface DateComparisonOperator {
    lt?: Date;
    gt?: Date;
    gte?: Date;
    lte?: Date;
}
export interface StringComparisonOperator {
    lt?: string;
    gt?: string;
    gte?: string;
    lte?: string;
}
export interface NumericalComparisonOperator {
    lt?: number;
    gt?: number;
    gte?: number;
    lte?: number;
}
export interface AddressPayload {
    first_name?: string;
    last_name?: string;
    phone?: string;
    metadata?: Record<string, unknown>;
    company?: string;
    address_1?: string;
    address_2?: string;
    city?: string;
    country_code?: string;
    province?: string;
    postal_code?: string;
}
export interface AddressCreatePayload {
    first_name: string;
    last_name: string;
    phone: string;
    metadata: object;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    country_code: string;
    province: string;
    postal_code: string;
}
export interface FindParams {
    expand?: string;
    fields?: string;
}
export interface FindPaginationParams {
    offset?: number;
    limit?: number;
}
