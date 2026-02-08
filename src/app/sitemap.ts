export default function sitemap() {
    const baseUrl = "https://enkryx.com";

    const routes = ["", "/services", "/portfolio", "/about", "/contact"].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split("T")[0],
        changeFrequency: "monthly",
        priority: route === "" ? 1.0 : 0.8,
    }));

    return routes;
}
