import { createClient, type GenericCtx } from '@convex-dev/better-auth';
import { convex } from '@convex-dev/better-auth/plugins';
import { components } from './_generated/api';
import { type DataModel } from './_generated/dataModel';
import { mutation, query } from './_generated/server';
import { betterAuth } from 'better-auth/minimal';
import { v } from 'convex/values';
import authConfig from './auth.config';

const siteUrl = process.env.SITE_URL!;
const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_SECRET;

// The component client has methods needed for integrating Convex with Better Auth,
// as well as helper methods for general use.
export const authComponent = createClient<DataModel>(components.betterAuth);

export const createAuth = (ctx: GenericCtx<DataModel>) => {
	return betterAuth({
		baseURL: siteUrl,
		database: authComponent.adapter(ctx),
		socialProviders: {
			google: {
				prompt: 'select_account',
				clientId: clientId as string,
				clientSecret: clientSecret as string
			}
		},
		// Configure simple, non-verified email/password to get started
		emailAndPassword: {
			enabled: true,
			requireEmailVerification: false
		},
		plugins: [
			// The Convex plugin is required for Convex compatibility
			convex({ authConfig })
		]
	});
};

// Example function for getting the current user
// Feel free to edit, omit, etc.
export const getCurrentUser = query({
	args: {},
	handler: async (ctx) => {
		try {
			return await authComponent.getAuthUser(ctx);
		} catch {
			// Return null when unauthenticated
			return null;
		}
	}
});

export const signUpEmail = mutation({
	args: {
		email: v.string(),
		password: v.string(),
		name: v.string()
	},
	async handler(ctx, args) {
		const auth = createAuth(ctx);

		const { headers, response } = await auth.api.signUpEmail({
			returnHeaders: true,
			body: {
				email: args.email,
				password: args.password,
				name: args.name
			}
		});

		return {
			response,
			headers: {
				'set-cookie': headers.get('set-cookie')
			}
		};
	}
});
