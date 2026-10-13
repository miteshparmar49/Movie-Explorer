import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

// Change this to the address where the app runs.
const APP_URL = "https://social-midia-tool.vercel.app";

export const metadata: Metadata = {
  title: "Social Tool: Schedule Facebook Posts | MVP InfoTech",
  description: "Social Tool by MVP InfoTech helps small businesses write posts and schedule them on their Facebook Page.",
};

export default function SocialTool() {
  return (
    <LegalPage title="Social Tool by MVP InfoTech" updated="October 13, 2026">
      <p className="mt-3 text-white/70">
        Social Tool is a web application from MVP InfoTech that helps small businesses plan their social media. Write a
        post once, add a photo or video, pick the time, and Social Tool publishes it to your Facebook Page for you.
      </p>

      <h2>What you can do today</h2>
      <ul>
        <li className=" text-white/70">Create an account and sign in with email or Google.</li>
        <li className=" text-white/70">Connect your Facebook Page and choose which Pages to share.</li>
        <li className=" text-white/70">Write posts with an optional photo or video.</li>
        <li className=" text-white/70">Schedule a post for a future date and time and see its status on the dashboard.</li>
      </ul>

      <h2>Coming soon</h2>
      <p className="mt-3 text-white/70">Instagram, LinkedIn and WhatsApp publishing, a content calendar, and team features.</p>

      <h2>How it works</h2>
      <ol>
        <li className=" text-white/70">Sign up and verify your email.</li>
        <li className=" text-white/70">Press Connect on Facebook and tick the Page you want to use.</li>
        <li className=" text-white/70">Write your post and choose when it should go live.</li>
        <li className=" text-white/70">Social Tool posts it to your Page at that time.</li>
      </ol>

      <h2>Your data</h2>
      <p className="mt-3 text-white/70">
        We use the permissions you approve only to list your Pages and publish your posts. Read our{" "}
        <a href="/privacy-policy">Privacy Policy</a>, <a href="/terms-of-service">Terms of Service</a> and{" "}
        <a href="/data-deletion">Data Deletion Instructions</a>.
      </p>

      <h2>Pricing</h2>
      <p className="mt-3 text-white/70">Free during our launch period. Paid plans may be added later with advance notice.</p>

      <p className="mt-3 text-white/70">
        <a href={APP_URL}>Open Social Tool</a>
      </p>
      <p className="mt-3 text-white/70">
        Provided by MVP InfoTech, Maldhari Society, Block no 5, RTO Road, Rajkot, Gujarat 360003, India.{" "}
        <a href="mailto:mvpinfotechmitesh@gmail.com">mvpinfotechmitesh@gmail.com</a>
      </p>
    </LegalPage>
  );
}
