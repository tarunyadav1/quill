import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { RegisterLink, LoginLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const Navbar = async () => {
	const { isAuthenticated, getUser } = getKindeServerSession()
	const user = await getUser()

	console.log(user)

	return (
		<nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between border-b border-zinc-200">
					<Link href="/" className="flex z-40 font-semibold">
						<span>quill.</span>
					</Link>

					<div className="hidden items-center space-x-4 sm:flex">
						<>
							<Link
								href="/pricing"
								className={buttonVariants({
									variant: 'ghost',
									size: 'sm',
								})}>
								Pricing
							</Link>
							<Link
								href="/dashboard"
								className={buttonVariants({
									variant: 'ghost',
									size: 'sm',
								})}>
								Dashboard
							</Link>
							{}
							<LoginLink>Sign in</LoginLink>
							<LogoutLink>Log out</LogoutLink>
						</>
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	)
}

export default Navbar
