"use client";

import Link from "next/link";
import Image from "next/image";
import { useClientFetch } from "@/hooks/useClientFetch";
import { MY_COLLECTIONS, IData } from "@/graphql/query/my-collections";
import { motion } from "framer-motion";
import styles from "./list.module.scss";

export default function List() {
  const { data, loading, error } = useClientFetch<IData>(
    MY_COLLECTIONS,
    {
      variables: {
        sort: "LATEST",
        offset: 0,
      },
    },
    true
  );

  return (
    <>
      {data?.myCollections.collectionsWithAttempt.map(({ collection }) => (
        <motion.div
          key={collection.id}
          whileHover={{ backgroundColor: "rgba(30, 162, 181, 0.2)" }}
          whileTap={{
            scale: 0.9,
            backgroundColor: "rgba(25, 140, 160, 0.2)",
          }}
        >
          <Link
            href={`/my/collections?id=${collection.id}`}
            className={styles.list}
          >
            <Image
              src={collection.imgUrl}
              alt={`${collection.name} 이미지`}
              width={80}
              height={80}
              style={{ objectFit: "cover" }}
              priority
            />
            <div>
              <h3>{collection.name}</h3>
              <span>{collection.description}</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </>
  );
}
