---
id: abstractlist
title: AbstractList
slug: /packages/quant/core/abstractlist
---

Reference

## Definition
Namespace: `Quant\Core`

`AbstractList<T>` Represents a strongly typed list with methods for manipulating and searching its items.

```php
class AbstractList<T>: \Quant\Core\Contract\Arrayable, 
                       \Quant\Core\Contract\Equatable, 
                       \ArrayAccess<int, T>, 
                       \Iterator<int, T>, 
                       \Countable
```

### Type Parameters
 - `T`: The type of the items maintained by the list.

## Example

```php

#[Getter] #[Setter]
class Entity 
{   
    use AccessorTrait;

    public function __construct(private string $value)
    {
    }
}

class EntityList extends AbstractList {
    
    public function getType(): string
    {
        return Entity::class;
    }
    
    protected function compareItems(mixed $a, mixed $b): bool
    {
        if (!($a instanceof Entity) && !($b instanceof Entity)) {
            return false;
        }
        
        return $a->getValue() === $b->getValue();
    }
    
}

$listA = new EntityList();
$listA[] = new Entity("1");
$listA[] = new Entity("1");

$listB = new EntityList();
$listB[] = new Entity("1");
$listB[] = new Entity("2");

$listA->equals($listB); // false

$listC = EntityList::make(new Entity("3"), new Entity("4"));

$listC->map(fn(Entity $item): Entity => $item->setValue("1"))->equals($listA); // true

$listB->peek()->getValue(); // "2"

$listC->findBy(fn (Entity $item): bool => $item->getValue() === "a"); //null
$listC->findBy(fn (Entity $item): bool => $item->getValue() !== "a")->toArray(); //[listC[0], listC[1]]
```

## Remarks

 - Items can be added to the list using the array shorthand syntax `$list[] = $item;`; If an item is added to the list
that is not of type `T`, a `TypeError` is thrown.
 - [`equals`](#equals) compares items using [`compareItems`](#compareitems) iff `T` does not implement [`Equatable`](/docs/packages/quant/core/contract/equatable) or [`Comparable`](/docs/packages/quant/core/contract/comparable) 

## Methods

### compareItems
Compares two instances of `T`, and returns `true` if two items reference the same item.

:::note
This method is used by [equals](#equals) and should be overriden when custom logic is required and `$lft` / `$rgt` do not not implement [`Equatable`](/docs/packages/quant/core/contract/equatable) or [`Comparable`](/docs/packages/quant/core/contract/comparable) .
:::

```php
    protected function compareItems(T $lft, T $rgt): bool
```

#### Parameters
- `T $lft`
- `T $rgt`

#### Returns
- `bool`

### equals
Compares two lists for equality. If `T` implements [`Equatable`](/docs/packages/quant/core/contract/equatable), `T`'s `equals`-method will be used.
If `T` implements [`Comparable`](/docs/packages/quant/core/contract/comparable), `T`'s `compareTo` will be used and two items will be considered
`equal` if `compareTo` returns `0` for two items. 

`compareTo` will only be called if `T` does not implement `Equatable`.

If `T` implements neither of the two, **this** list  calls [`compareItems`](#compareitems).


```php
public function equals(Equatable $target): bool
```

#### Parameters
- `Equatable $target`<br /> The list **this** list should be compared to.

#### Returns
- `bool` <br /> `true` if list `$target` is considered to be equal to **this** list


### findType
Returns a new `AbstractList<T>` with all entries matched by `$findFn`, or `null` if no items where matched.

```php
public function findType(callable $findFn): null|AbstractList<T>
```

#### Parameters
 - `callable $findFb`<br /> Callback function that takes an instance of `T` as an argument and returns `bool`: `true` indicates a match.

#### Returns
 - `AbstractList<T>` <br /> A new list containing the matched items. 



### getType
Returns the class name of `T`.

```php
abstract public function getType(): string
```

#### Returns
 - `string`



### map
Applies the callable to the items of **this** list.

#### Parameters
 - `callable $mapFn`<br />A function that takes an instance of `T` as the argument and returns the same instance of `T`

#### Returns
 - `AbstractList<T>`


### make
Factory method for creating instances of `AbstractList<T>`

```php
public static function make(T ...$items): AbstractList<T>
```

#### Parameters
- `T ...$items` <br /> An arbitrary number of arguments each representing an instance of `T`

#### Returns
 - `AbstractList<T>`


### peek
Returns the element at the head of the `AbstractList`, or `null` if the list is empty.

```php
public function peek(): mixed
```

#### Returns
 - `?<T>` <br /> `null` if the list is empty, otherwise the element of type `<T>` found at the head of the list.
