/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as QuizIndexImport } from './routes/quiz.index'
import { Route as QuizGameImport } from './routes/quiz.$game'
import { Route as NurseryRhymesPostIdImport } from './routes/nursery-rhymes.$postId'

// Create Virtual Routes

const QuizLazyImport = createFileRoute('/quiz')()
const NumbersLazyImport = createFileRoute('/numbers')()
const AlphabetLazyImport = createFileRoute('/alphabet')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const QuizLazyRoute = QuizLazyImport.update({
  path: '/quiz',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/quiz.lazy').then((d) => d.Route))

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

const QuizIndexRoute = QuizIndexImport.update({
  path: '/',
  getParentRoute: () => QuizLazyRoute,
} as any)

const QuizGameRoute = QuizGameImport.update({
  path: '/$game',
  getParentRoute: () => QuizLazyRoute,
} as any)

const NurseryRhymesPostIdRoute = NurseryRhymesPostIdImport.update({
  path: '/nursery-rhymes/$postId',
  getParentRoute: () => rootRoute,
} as any)

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
    '/quiz': {
      preLoaderRoute: typeof QuizLazyImport
      parentRoute: typeof rootRoute
    }
    '/nursery-rhymes/$postId': {
      preLoaderRoute: typeof NurseryRhymesPostIdImport
      parentRoute: typeof rootRoute
    }
    '/quiz/$game': {
      preLoaderRoute: typeof QuizGameImport
      parentRoute: typeof QuizLazyImport
    }
    '/quiz/': {
      preLoaderRoute: typeof QuizIndexImport
      parentRoute: typeof QuizLazyImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AlphabetLazyRoute,
  NumbersLazyRoute,
  QuizLazyRoute.addChildren([QuizGameRoute, QuizIndexRoute]),
  NurseryRhymesPostIdRoute,
])

/* prettier-ignore-end */
