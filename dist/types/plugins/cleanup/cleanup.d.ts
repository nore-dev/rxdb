import type { RxCleanupPolicy, RxCollection } from '../../types';
export declare function startCleanupForRxCollection(rxCollection: RxCollection): Promise<void>;
/**
 * Runs the cleanup for a single RxCollection
 */
export declare function cleanupRxCollection(rxCollection: RxCollection, cleanupPolicy: RxCleanupPolicy): Promise<void>;
export declare function runCleanupAfterDelete(rxCollection: RxCollection, cleanupPolicy: RxCleanupPolicy): Promise<void>;
