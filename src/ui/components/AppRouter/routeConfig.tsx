import { type RouteProps } from 'react-router-dom';
import PostsPage from "../PostsPage/PostsPage";
import PostDetailsPage from "../PostDetailsPage/PostDetailsPage";

export enum AppRoute {
  MAIN = 'main',
  POST = 'post'
}

export const RoutePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.POST]: '/post/',
};

export const routeConfig: Record<AppRoute, RouteProps> = {
  [AppRoute.MAIN]: {
    path: RoutePath.main,
    element: <PostsPage />,
  },
  [AppRoute.POST]: {
    path: `${RoutePath.post}:id`,
    element: <PostDetailsPage />,
  },
};
