export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 h-16 bg-white shadow-md flex items-center justify-between px-6 z-50">
            <h1 className="text-xl font-bold">Notey</h1>

            <div className="hidden md:flex gap-6">
                <a href="#" className="hover:text-blue-600">
                    Home
                </a>
                <a href="#" className="hover:text-blue-600">
                    About
                </a>
                <a href="#" className="hover:text-blue-600">
                    Services
                </a>
                <a href="#" className="hover:text-blue-600">
                    Contact
                </a>
            </div>
        </footer>
    );
}
