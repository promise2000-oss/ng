"use client";

import { motion } from "motion/react";
import { useStaff } from "@/lib/hooks/useStaff";
import { imageUrl } from "@/lib/api";
import type { Staff } from "@/lib/types";
import StaggerContainer from "@/components/animations/StaggerContainer";

function initials(name: string) {
  return name.charAt(0).toUpperCase();
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] as const },
  },
};

function TeamCard({ member }: { member: Staff }) {
  const imgUrl = imageUrl(member.image);
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3 } }}
      className="bg-white rounded-2xl overflow-hidden shadow-md border-b-4 border-gray-200 hover:border-primary transition-colors duration-200"
    >
      <div className="aspect-[1/1] bg-gray-200 relative overflow-hidden">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-white bg-primary">
            {initials(member.name)}
          </div>
        )}
      </div>
      <div className="p-4 text-center">
        <p className="text-sm font-semibold text-text-primary leading-tight">
          {member.name}
        </p>
        <p className="text-xs text-text-primary/70 mt-1">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}

function TeamGrid({ members }: { members: Staff[] }) {
  return (
    <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {members.map((member) => (
        <TeamCard key={member._id} member={member} />
      ))}
    </StaggerContainer>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse">
          <div className="aspect-[1/1] bg-gray-200" />
          <div className="p-4 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
            <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MeetOurTeam() {
  const { data: staff = [], isLoading } = useStaff();

  const activeStaff = staff.filter((m) => m.isActive);
  const executives = activeStaff.filter((m) => m.category === "executive");
  const members = activeStaff.filter((m) => m.category !== "executive");

  return (
    <section className="px-6 md:px-20 py-20 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-text-primary mb-12">
          Meet Our Team
        </h2>

        {isLoading && <LoadingSkeleton />}

        {!isLoading && (
          <div className="space-y-16">
            {executives.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold text-center text-text-primary mb-8">
                  Executive
                </h3>
                <TeamGrid members={executives} />
              </div>
            )}
            {members.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold text-center text-text-primary mb-8">
                  Leadership Team
                </h3>
                <TeamGrid members={members} />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
