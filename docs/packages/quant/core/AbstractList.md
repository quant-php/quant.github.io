---
id: abstractlist
title: AbstractList
slug: /packages/quant/core/abstractlist
---

Reference

## Definition
Namespace: `Quant\Core`

`AbstractList` Represents a strongly typed list with methods for manipulating and searching.

```php
class AbstractList<T>: \Quant\Core\Contract\Arrayable, 
                       \Quant\Core\Contract\Equatable, 
                       \ArrayAccess<int, T>, 
                       \Iterator<int, T>, 
                       \Countable
```

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


## Methods
