import {createAction} from 'redux-actions';
import {AppDispatch} from "../index";
import gateway from "../util/gateway";

enum Methods {
    GET = "get",
    POST = "post",
    DELETE = "delete",
    PUT = "put",
    PATCH = "patch"
}

type ApiRequest = (
    method: string,
    actionType: string,
    path: string,
    data?: any,
    options?: any,
)=> any

type ApiRequestRestArgs = (
    actionType: string,
    path: string,
    data?: any,
    options?: any,
)=> any


// @ts-ignore
// @ts-ignore
/**
 * Simple wrapper action to execute a gateway request. Will dispatch an async action (action with
 * promise on payload) with additional information about the API call on the meta property.
 * @function apiRequest
 * @param {string} method The request method to use ("get", "post", etc..)
 * @param {string} actionType The 'type' property of the dispatched action is set to this value
 * defined in _Injectables.js_
 * @param {string} path The path to the endpoint to request
 * @param {object} [data=null] Object with enum to send with the API request
 * @param {object} [options={}] Object with additional options passed to the gateway. Please see
 * the gateway documentation for more information
 */
export const apiRequest:ApiRequest = (
       method: string,
       actionType: string,
       path: string,
       data:object | null = null,
       options:object = {},
   ) => (dispatch:AppDispatch) =>
  dispatch(
    createAction(actionType, null, (payload, meta) => meta)(
      method === Methods.DELETE || method === Methods.GET
          //@ts-ignore
        ? gateway[method](path, options) : gateway[method](path, data, options),
      { api: { data, options } },
    ),
  );

/**
 * Wrapper action for 'apiRequest()' that sets the method to 'get'. All other
 * parameters are the same.
 * @function apiGet
 */
export const apiGet:ApiRequestRestArgs = (...requestArgs) => apiRequest(Methods.GET, ...requestArgs);

/**
 * Wrapper action for 'apiRequest()' that sets the method to 'post'. All other
 * parameters are the same.
 * @function apiPost
 */
export const apiPost:ApiRequestRestArgs = (...requestArgs) => apiRequest(Methods.POST, ...requestArgs);

/**
 * Wrapper action for 'apiRequest()' that sets the method to 'put'. All other
 * parameters are the same.
 * @function apiPut
 */
export const apiPut:ApiRequestRestArgs = (...requestArgs) => apiRequest(Methods.PUT, ...requestArgs);

/**
 * Wrapper action for 'apiRequest()' that sets the method to 'patch'. All other
 * parameters are the same.
 * @function apiPatch
 */
export const apiPatch:ApiRequestRestArgs = (...requestArgs) => apiRequest(Methods.PATCH, ...requestArgs);

/**
 * Wrapper action for 'apiRequest()' that sets the method to 'delete'. All other
 * parameters are the same.
 * @function apiDelete
 */
export const apiDelete:ApiRequestRestArgs = (...requestArgs) => apiRequest(Methods.DELETE, ...requestArgs);
