export const parseSemver = (
  version: string
): {
  major: number;
  minor: number;
  patch: number;
} => {
  let [major, minor, patch] = version.split(".").map(Number);
  if (isNaN(major)) {
    major = 0;
  }
  if (isNaN(minor)) {
    minor = 0;
  }
  if (isNaN(patch)) {
    patch = 0;
  }
  return { major, minor, patch };
};

export const isSemverHigher = (current: string, target: string): boolean => {
  const currentVersion = parseSemver(current);
  const targetVersion = parseSemver(target);

  if (currentVersion.major > targetVersion.major) {
    return true;
  }
  if (currentVersion.major < targetVersion.major) {
    return false;
  }

  if (currentVersion.minor > targetVersion.minor) {
    return true;
  }

  if (currentVersion.minor < targetVersion.minor) {
    return false;
  }

  if (currentVersion.patch > targetVersion.patch) {
    return true;
  }

  return false;
};

export const isSemverEqual = (current: string, target: string): boolean => {
  const currentVersion = parseSemver(current);
  const targetVersion = parseSemver(target);

  return currentVersion.major === targetVersion.major && currentVersion.minor === targetVersion.minor && currentVersion.patch === targetVersion.patch;
};

export const isSemverHigherOrEqual = (current: string, target: string): boolean => {
  return isSemverHigher(current, target) || isSemverEqual(current, target);
};

export const semverUtils = {
  parseSemver,
  isSemverHigher,
  isSemverEqual,
  isSemverHigherOrEqual,
};
