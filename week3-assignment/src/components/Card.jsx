export default function Card({ title, content, footer, children }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 transition duration-300">
            {/* Optional Title */}
            {title && (
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {title}
                </h2>
            )}

            {/* Optional Content */}
            {content && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {content}
                </p>
            )}

            {/* Slot for custom children (e.g., buttons or images) */}
            {children}

            {/* Optional Footer */}
            {footer && (
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    {footer}
                </div>
            )}
        </div>
    );
}
