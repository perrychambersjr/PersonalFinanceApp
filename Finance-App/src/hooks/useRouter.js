import { useLocation, useNavigate, useParams } from "react-router-dom";

export function useRouter() {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    return {
        push: (path, options) => navigate(path, { replace: false, ...options}),
        replace: (path, options) => navigate(path, { replace: true, ...options}),
        back: () => navigate(-1),

        // Route info
        pathname: location.pathname,
        query: Object.fromEntries(new URLSearchParams(location.search)),
        params: params,
    };
}