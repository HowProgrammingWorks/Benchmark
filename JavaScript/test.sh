#!/bin/sh

#node --allow-natives-syntax --nouse-idle-notification --expose-gc --noconcurrent_sweeping --noconcurrent_recompilation --predictable $1
node --allow-natives-syntax $1
