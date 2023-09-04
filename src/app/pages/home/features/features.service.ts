import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeaturesService {
  constructor() {}

  data = 
    {
      userdetail: {
        p1: "Let's find users who are uploading repos on github. You can visit their profile checkout the repos and organizations they are working with.Explore different projects and gain knowledge. Learn more about the user's background, interests, and expertise through their bio and description. Discover what makes this GitHub user unique.'Want to explore more? Visit the GitHub profile directly to access additional details about this user's repositories, projects, and contributions.",
        p2: "Stay updated on this user's recent GitHub activity, including contributions to projects, pull requests, and issues. See their dedication to open-source collaboration.Learn about the user's location and contact information. Connect with them through email if they've chosen to share this information.Discover how the user's repositories are received by the community. The number of forks and stars reflects the popularity and impact of their projects.",
      },
      repositories: {
        p1: "Discover the repositories owned by this GitHub user. From innovative projects to code libraries, explore their diverse range of contributions.View details about each repository, including the repository name, description, and the primary programming language used.See how popular this user's repositories are within the GitHub community. The number of forks and stars reflects the engagement and impact of their work.",
        p2: "Find out how this user contributes to their repositories. Explore the commits, pull requests, and issues they've worked on.Discover the programming languages that this user employs in their repositories. Gain insights into their technical expertise and preferences.Explore the topics associated with each repository. Topics help categorize projects and provide context for their content.",
      },
      activities: {
        p1: "Discover the most recent events performed by this user. From code commits to issue interactions, see their involvement in various projects.Stay informed about this GitHub user's recent activity and contributions. Explore their impact on the open-source community.Explore the user's commit history. Understand their coding patterns, frequency of contributions, and the repositories they've been working on.",
        p2: "View the pull requests submitted by this user. See how they collaborate with others to improve projects through code contributions.Check out how this user interacts with issues in repositories. From opening new issues to commenting on existing ones, see their engagement.Witness the user's collaborative efforts in real-time. Understand their role in shaping open-source projects through interactions.See how this user interacts with the GitHub community. Discover their engagement in discussions and feedback.",
      },
    };

  emit: EventEmitter<number> = new EventEmitter();
}
