/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const NumbersLazyImport = createFileRoute('/numbers')()
const AlphabetLazyImport = createFileRoute('/alphabet')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const NumbersLazyRoute = NumbersLazyImport.update({
  path: '/numbers',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/numbers.lazy').then((d) => d.Route))

const AlphabetLazyRoute = AlphabetLazyImport.update({
  path: '/alphabet',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/alphabet.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/alphabet': {
      preLoaderRoute: typeof AlphabetLazyImport
      parentRoute: typeof rootRoute
    }
    '/numbers': {
      preLoaderRoute: typeof NumbersLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AlphabetLazyRoute,
  NumbersLazyRoute,
])

/* prettier-ignore-end */
