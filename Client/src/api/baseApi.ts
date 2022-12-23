// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serialize } from 'object-to-formdata';

const baseUrl = import.meta.env.DEV ? '/' : import.meta.env.BASE_URL;

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl,
		credentials: 'include',
	}),
	endpoints: () => ({}),
});

export function toFormData<T extends Object>(object: T) {
	return serialize(object) as unknown as T;
}
