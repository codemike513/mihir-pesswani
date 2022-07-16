const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#111827] py-3 h-15">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()}{' '}
            <a href="https://instagram.com/mihirpesswani52971" className="hover:text-pink-600">
              Built and Design by Mihir Pesswani
            </a>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          <a href="https://reactbricks.com" className="hover:text-pink-600">
            ALL RIGHTS RESERVED
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
