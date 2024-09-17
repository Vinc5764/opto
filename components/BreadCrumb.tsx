// components/Breadcrumb.js
const Breadcrumb = ({ title, breadcrumbs }) => {
  return (
    <div className="bg-[#e4fbfb] py-24">
      <div className="container text-center mx-auto px-4">
        <h1 className="text-3xl font-semibold text-blue-900 mb-2">{title}</h1>
        <nav className="text-gray-600 text-sm">
          <ol className="list-none p-0 inline-flex">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {crumb.href ? (
                  <a href={crumb.href} className="text-blue-900">{crumb.label}</a>
                ) : (
                  <span className="text-red-500">{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <svg
                    className="h-4 w-4 mx-2 fill-current text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
