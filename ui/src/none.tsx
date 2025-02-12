// Copyright 2020 H2O.ai, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Model, S } from './core'
import React from 'react'
import { cards } from './layout'
import { bond } from './ui'

export const
  View = bond(({ name, state, changed }: Model<Record<S, unknown>>) => {
    const
      render = () => (
        <div data-test={name}>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
      )
    return { render, changed }
  })

cards.register('', View)