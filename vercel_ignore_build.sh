#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ $VERCEL_GIT_COMMIT_REF == "master" || $VERCEL_GIT_COMMIT_REF == "develop" ]] ; then
	echo "✅ - Build can proceed";
	exit 1;
fi

if [[ $VERCEL_GIT_COMMIT_MESSAGE == *"[WIP]"* ]] ; then
	echo "🛑 - Build cancelled by [WIP] message";
	exit 0;
else
	echo "✅ - Build can proceed";
	exit 1;
fi
