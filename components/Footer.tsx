export default function Footer() {
  return (
    <footer className="mx-auto mt-auto w-full border-t border-neutral-200 bg-white/80 px-4 py-4 text-sm text-neutral-600 sm:px-6 lg:px-8 xl:px-10">
      <ul className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
        <li>
          <span className="font-medium text-neutral-950">Username: </span>
          <a className="hover:text-neutral-950" href="https://github.com/hongkhy">Hongkhy Kong</a>
        </li>
        <li>
          <span className="font-medium text-neutral-950">Email: </span>
          <a className="hover:text-neutral-950" href="mailto:hongkhy017549@gmail.com">hongkhy017549@gmail.com</a>
        </li>
        <li>
          <span className="font-medium text-neutral-950">Phone Number: </span>
          <a className="hover:text-neutral-950" href="">+885 99 753 099</a>
        </li>
      </ul>
    </footer>
  );
}