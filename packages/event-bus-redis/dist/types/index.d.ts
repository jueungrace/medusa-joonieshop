import { Job, JobsOptions, QueueOptions, WorkerOptions } from "bullmq";
import { RedisOptions } from "ioredis";
export declare type JobData<T> = {
    eventName: string;
    data: T;
    completedSubscriberIds?: string[] | undefined;
};
export declare type BullJob<T> = {
    data: JobData<T>;
} & Job;
export declare type EmitOptions = JobsOptions;
export declare type EventBusRedisModuleOptions = {
    queueName?: string;
    queueOptions?: QueueOptions;
    workerOptions?: WorkerOptions;
    redisUrl?: string;
    redisOptions?: RedisOptions;
    /**
     * Global options passed to all `EventBusService.emit` in the core as well as your own emitters. The options are forwarded to Bull's `Queue.add` method.
     *
     * The global options can be overridden by passing options to `EventBusService.emit` directly.
     *
     * Example
     * ```js
     * {
     *    removeOnComplete: { age: 10 },
     * }
     * ```
     *
     * @see https://api.docs.bullmq.io/interfaces/BaseJobOptions.html
     */
    jobOptions?: EmitOptions;
};
