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
    <LegalPage title="Social Tool by MVP InfoTech" updated="October 19, 2026">
      <p>
        Social Tool is a web application from MVP InfoTech that helps small businesses plan their social media. Write a
        post once, add a photo or video, pick the time, and Social Tool publishes it to your Facebook Page for you.
      </p>

      <h2>What you can do today</h2>
      <ul>
        <li>Create an account and sign in with email or Google.</li>
        <li>Connect your Facebook Page and your Instagram professional account.</li>
        <li>Write posts with an optional photo or video.</li>
        <li>Schedule a post for a future date and time, move it on a calendar, and see its status on the dashboard.</li>
      </ul>

      <h2>Coming soon</h2>
      <p>LinkedIn, YouTube and WhatsApp publishing, AI caption help, and team features.</p>

      <h2>How it works</h2>
      <ol>
        <li>Sign up and verify your email.</li>
        <li>Press Connect on Facebook and tick the Page you want to use.</li>
        <li>Write your post and choose when it should go live.</li>
        <li>Social Tool posts it to your Page at that time.</li>
      </ol>

      <h2>Your data</h2>
      <p>
        We use the permissions you approve only to list your Pages and publish your posts. Read our{" "}
        <a href="/privacy-policy">Privacy Policy</a>, <a href="/terms-of-service">Terms of Service</a> and{" "}
        <a href="/data-deletion">Data Deletion Instructions</a>.
      </p>

      <h2>Pricing</h2>
      <p>Free during our launch period. Paid plans may be added later with advance notice.</p>

      <p>
        <a href={APP_URL}>Open Social Tool</a>
      </p>
      <p>
        Provided by MVP InfoTech, Maldhari Society, Block no 5, RTO Road, Rajkot, Gujarat 360003, India.{" "}
        <a href="mailto:mvpinfotechmitesh@gmail.com">mvpinfotechmitesh@gmail.com</a>
      </p>
    </LegalPage>
  );
}
