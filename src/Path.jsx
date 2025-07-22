
import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";

// Day 1
import BackgroundChanger from "./Day 1/BackgroundChanger";

// Day 2
import Array from "./Day 2/Array";
import Calculator from "./Day 2/Calculator";
import Condition from "./Day 2/Condition";
import Multiplication from "./Day 2/Multiplication";
import Variable from "./Day 2/Variable";

// Day 3
import Grade from "./Day 3/Grade";
import Merge from "./Day 3/Merge";
import Object from "./Day 3/Object";
import Userlist from "./Day 3/Userlist";

// Day 4
import UserCard from "./Day 4/Components/UserCard";
import EmojiPicker from "./Day 4/EmojiPicker";
import Users from "./Day 4/Users";

// Day 5
import FocusInput from "./Day 5/FocusInput";
import Parent from "./Day 5/LiftingState";
import LoginForm from "./Day 5/LoginForm";

// Day 6
import Navbar from "./Day 6/Component/Navbar";
import Home from "./Day 6/Home";
import UserDetails from "./Day 6/UserDetails";
import ViewUser from "./Day 6/ViewUser";

// Day 7
import DayNavigation from "./Day 7/Components/DayNavigation";

// Day 8
import TodoApp from "./Day 8/Todo";

import PageNotFound from "./PageNotFound";
import CompleteForm from "./Day 9/CompleteForm";

export default function Path() {
	return (
		<Routes>
			<Route path="*" element={<PageNotFound />} />
			<Route path="/" element={<Layout />}>

				{/* Day 1 Routes */}
				<Route
					path="/day1/background-changer" element={<BackgroundChanger />} />

				{/* Day 2 Routes */}
				<Route path="/day2/array" element={<Array />} />
				<Route path="/day2/calculator" element={<Calculator />} />
                <Route path="/day2/condition" element={<Condition />} />
				<Route path="/day2/multiplication" element={<Multiplication/>} />
				<Route path="/day2/variable" element={<Variable />} />

				{/* Day 3 Routes */}
                <Route path="/day3/grade" element={<Grade />} />
				<Route path="/day3/merge" element={<Merge />} />
                <Route path="/day3/object" element={<Object />} />
				<Route path="/day3/userlist" element={<Userlist />} />

				{/* Day 4 Routes */}
				<Route path="/day4/components/user-card" element={<UserCard />} />
				<Route path="/day4/emoji-picker" element={<EmojiPicker />} />
				<Route path="/day4/users" element={<Users />} />

				{/* Day 5 Routes */}
				<Route path="/day5/focus-input" element={<FocusInput />} />
				<Route path="/day5/lifting-state" element={<Parent />} />
				<Route path="/day5/login-form" element={<LoginForm />} />

				{/* Day 6 Routes */}
                <Route path="/day6/component/nav-bar" element={<Navbar />} />
				<Route path="/day6/home" element={<Home />} />
				<Route path="/day6/userdetails/:id" element={<UserDetails />} />
                <Route path="/day6/view-user" element={<ViewUser />} />

                {/* Day 7 Routes */}
                <Route path="/day7/components/day-navigation" element={<DayNavigation />} />

				{/* Day 8 Routes */}
				<Route path="/day8/todo" element={<TodoApp />} />

				{/* Day 9 Routes */}
				<Route path="/day9/completeform" element={<CompleteForm />} />
			</Route>
		</Routes>
	);
}
