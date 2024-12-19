import { RPCResponse } from './types';

/**
 * Checks if the RPC response matches the expected value
 * @param response The RPC response to validate
 * @param expected The expected string value
 * @returns boolean indicating if the response matches the expectation
 */
export function check(response: RPCResponse, expected: string): boolean {
    try {
        const returnValue = response.result as string;
        return returnValue === expected;
    } catch (error) {
        console.error('Error checking RPC response:', error);
        throw error;
    }
}

/*
// State change executes for example a simple eth_sendTransaction etc.
function stateChange() {

}
*/ 