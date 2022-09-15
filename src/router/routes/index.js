// ** React Imports
import { Fragment, lazy } from "react";
import { Navigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";
import HorizontalLayout from "@src/layouts/HorizontalLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";

// ** Utils
import { isObjEmpty } from "@utils";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/home";

const Home = lazy(() => import("../../views/Home"));
const SecondPage = lazy(() => import("../../views/SecondPage"));
const Login = lazy(() => import("../../views/Login"));
const Register = lazy(() => import("../../views/Register"));
const ForgotPassword = lazy(() => import("../../views/ForgotPassword"));
const VerifyEmailBasic = lazy(() => import("../../views/VerifyEmailBasic"));

const Error = lazy(() => import("../../views/Error"));
const EditLote = lazy(() => import("../../components/home/EditLote"))
const NewLote = lazy(() => import("../../components/home/NewLote"))
const Alta = lazy(() => import("../../components/home/Alta"));
const Arrancador = lazy(() => import("../../pages/Arrancador"));
const BalanceCero = lazy(() => import("../../pages/BalanceCero"));
const BalanceN = lazy(() => import("../../pages/BalanceN"));
const Fertilizantes = lazy(() => import("../../pages/Fertilizantes"));
const FormulaAbono = lazy(() => import("../../pages/FormulaAbono"));
const Rendimiento = lazy(() => import("../../pages/Rendimiento"));
const AccountContainer = lazy(() => import("../../views/AccountContainer"))

// ** Merge Routes
const Routes = [
  {
    path: "/",
    index: true,
    element: <Navigate replace to={DefaultRoute} />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/second-page",
    element: <SecondPage />,
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/register",
    element: <Register />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/verify-email",
    element: <VerifyEmailBasic />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/profile",
    element: <AccountContainer />
  },
  {
    path: "*",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/arrancador",
    element: <Arrancador />,
  },
  {
    path: "/Alta",
    element: <Alta />,
  },
  {
    path: "/edit-lote",
    element: <EditLote />,
  },
  {
    path: "/new-lote",
    element: <NewLote />,
  },
  {
    path: "/balanceCero",
    element: <BalanceCero />,
  },
  {
    element: <BalanceN />,
    path: "/balanceN",
  },
  {
    element: <Fertilizantes />,
    path: "/fertilizantes",
  },
  {
    element: <FormulaAbono />,
    path: "/formulaAbono",
  },
  {
    element: <Rendimiento />,
    path: "/rendimiento",
  },
];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    if (window.localStorage.getItem("key")) {
      console.log("hola");
    } else {
      console.log("llamda");
    }
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                LayoutWrapper
              : Fragment;

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {
  const defaultLayout = layout || "vertical";
  const layouts = ["vertical", "horizontal", "blank"];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, TemplateTitle, Routes, getRoutes };
